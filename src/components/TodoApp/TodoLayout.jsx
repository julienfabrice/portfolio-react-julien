function TodoLayout({ children }) {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 z-0">
      {children}
    </div>
  );
}

export default TodoLayout;