export default function FindCategories(category, string) {
  for (let x = 0; x < category.length; x++) {
    if (category[x].label === string) {
      return category[x].data;
    }
  }
  return null;
}