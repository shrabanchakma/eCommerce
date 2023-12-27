const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`p-10 transform transition-transform ${
        isOpen ? "translate-x-0 w-56 bg-green-700" : "-translate-x-full w-0"
      }`}
    >
      <ul>
        <li>hi</li>
        <li>hello</li>
        <li>good</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
