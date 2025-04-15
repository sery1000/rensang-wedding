const items = [
  { name: "웨딩 부케", source: "다이소", link: "https://daiso.com" },
  { name: "셀프 드레스", source: "쿠팡", link: "https://coupang.com" }
];

export default function ItemList() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>
          <a href={item.link} target="_blank">{item.name} - {item.source}</a>
        </li>
      ))}
    </ul>
  );
}
