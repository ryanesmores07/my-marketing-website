export const ProjectsGrid = ({ items }: { items: any[] }) => {
  return (
    <section>
      <h2>Projects Grid</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
};
