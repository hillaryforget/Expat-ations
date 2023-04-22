export default function FindData(city_det, string) {
  if (city_det !== null) {
    for (let x = 0; x < city_det.length; x++) {
      if (city_det[x].id === string) {
        return city_det[x];
      }
    }
  }
  return null;
}