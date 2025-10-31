'use client';
export  function Tabs({ children }) {
  return <div>{children}</div>;
}
export  function TabList({ children, index, activeTab }) {
  return (
    <div
      style={{
        display: "flex",
       
        alignItems: "center",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
}


export  function Tabtrigger({ children, activeTab, index, onClick }) {
  const isActive = index === activeTab;
  return (
    <div>
      <button
        className={`px-4 py-2 rounded-full xl:text-lg xl:font-semibold ${isActive ? "bg-brand text-white" : " text-primary"}`}
        onClick={() => onClick(index)}
      >
        {children}
      </button>
    </div>
  );
}
export  function TabContent({ children, index, activeTab }) {
  const isActive = index === activeTab;
  console.log(activeTab, index);
  return <div style={{ display: isActive ? "block" : "none" }}>{children}</div>;
}
