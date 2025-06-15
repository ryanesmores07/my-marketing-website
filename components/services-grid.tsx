export const ServicesGrid = ({ items }: { items: any[] }) => {
  return (
    <section>
      <h2>Services Grid</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
};
