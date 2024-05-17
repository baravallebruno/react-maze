type SelectionListPros = {
  children: React.ReactNode;
  title: string;
};

const SelectionList = ({ children, title }: SelectionListPros) => {
  return (
    <section className="mb-12">
      <h3 className="font-maze-font text-white text-3xl mb-5">{title}</h3>
      <ul>{children}</ul>
    </section>
  );
};

export default SelectionList;
