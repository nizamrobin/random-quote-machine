export default function RandomColorGenerator() {
  return "#" + (Math.round(Math.random() * 10000) + 900000);
}
