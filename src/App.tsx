import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            My Todo List
          </h1>
          
          <div className="flex space-x-3 mb-6">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border outline-none transition-colors"
            />
            <button
              onClick={handleAddTask}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Add
            </button>
          </div>

          {tasks.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {tasks.map((task, index) => (
                <li key={index} className="py-4 flex items-center px-2 hover:bg-gray-50 rounded-md transition-colors">
                  <span className="text-gray-800 text-base">{task}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center italic py-4">No tasks yet. Add one above!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
