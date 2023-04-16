import { useRouter } from "next/router";

const SearchKeys = {
  Location: "location",
  Month: "month",
  Budget: "budget",
  Activity: "activity",
};

export default function Selector() {
  const router = useRouter();
  const pathNameParams = new URLSearchParams(router?.asPath?.split("?")[1]);
  const { location, month, budget, activity } =
    Object.fromEntries(pathNameParams);

  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    if (!formProps[SearchKeys.Location] || !formProps[SearchKeys.Month]) return;

    const newSearchParams = new URLSearchParams(formProps);

    router.push({
      pathname: "/page",
      search: newSearchParams.toString(),
    });
  };

  return (
    <form onSubmit={submit}>
      <div className="h-8" />

      <div className="flex gap-2 justify-between items-center">
        <p>Please fill </p>

        <input
          type="text"
          name={SearchKeys.Location}
          placeholder="🌍 location *"
          defaultValue={location}
          className="input input-ghost max-w-[150px]"
        />

        <p>and</p>

        <select
          name={SearchKeys.Month}
          className="select select-ghost"
          defaultValue={month || "📅 month *"}
        >
          <option disabled>📅 month *</option>

          {months.map((month) => (
            <option key={month}>{month}</option>
          ))}
        </select>

        <button className="btn" type="submit">
          Suggest
        </button>
      </div>

      <div className="flex gap-2 justify-between items-center">
        <p>Additionally you may add </p>

        <select
          name={SearchKeys.Activity}
          className="select select-ghost"
          defaultValue={activity || "🏄‍ some activities"}
        >
          <option disabled>🏄‍ some activities</option>
          <option>Snowboarding</option>
          <option>Skiing</option>
          <option>Surfing</option>
          <option>Chilling on the beach</option>
          <option>Hiking</option>
          <option>Shopping</option>
          <option>Sightseeing</option>
        </select>

        <p>and</p>

        <input
          name={SearchKeys.Budget}
          type="number"
          placeholder="🤑 your budget in $/month"
          className="input input-ghost w-full max-w-[250px]"
          defaultValue={budget}
        />
      </div>

      <div className="h-8" />
    </form>
  );
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];