import React, { useState, useEffect } from 'react'

function App() {

  const [dark, setDark] = useState(false)

  const [itemId, setItemId] = useState([
    { id: 1, img: "/images/logo-devlens.svg", title: 'Dev-lens', text: 'Quickly inspect page layout and visualize the elements.', toggled: false },
    { id: 2, img: "/images/logo-style-spy.svg", title: 'Style-spy', text: 'Instantly analyze and copy CSS from any webpages element.', toggled: false },
    { id: 3, img: "/images/logo-console-plus.svg", title: 'Console-plus', text: 'Enhanced developer console with advanced filtering and logging.', toggled: false },
    { id: 4, img: "/images/logo-dom-snapshot.svg", title: 'DOM-Snapshot', text: 'Capture and export DOM structures quickly.', toggled: false },
    { id: 5, img: "images/logo-grid-guides.svg", title: 'Grid-guides', text: 'Overlay customizable grids and alignment guides on any webpages', toggled: false },
    { id: 6, img: "/images/logo-json-wizard.svg", title: 'JSON-Wizard', text: 'Fromat, validates and prettifies JSON responses in-browser.', toggled: false },
    { id: 7, img: "/images/logo-link-checker.svg", title: 'Link-Checker', text: 'Scans and highlights broken links on any page.', toggled: false },
    { id: 8, img: "/images/logo-markup-notes.svg", title: 'Markup-Notes', text: 'Enable annotation and notes directly onto web Pages for collabrative debugging.', toggled: false },
    { id: 9, img: "/images/logo-speed-boost.svg", title: 'Speed-Boost', text: 'Optimizes browser resource usage to accelerate page loading.', toggled: false },
    { id: 10, img: "/images/logo-tab-master-pro.svg", title: 'Tab-master', text: 'Organizes browser tabs into groups and sessions.', toggled: false },
    { id: 11, img: "/images/logo-palette-picker.svg", title: 'Palette-picker', text: 'Instantly developer console with advanced filtering and logging.', toggled: false },
    { id: 12, img: "/images/logo-viewport-buddy.svg", title: 'Viewport-Buddy', text: 'Simulates various screen resolutions directly within the Browser.', toggled: false },
  ])

  const [filter, setFilter] = useState('all');

  const filteredItems = itemId.filter(item => {
    if (filter === 'active') return item.toggled === true;
    if (filter === 'inactive') return item.toggled === false;
    return true;
  })


  const removeItem = (idToRemove) => {
    setItemId(prevItems => prevItems.filter(item => item.id !== idToRemove));
  };

  const toggledId = (id) => {
    setItemId(prev =>
      prev.map(item =>
        item.id === id ? { ...item, toggled: !item.toggled } : item
      )
    );
  }

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);


  return (

    <div className="min-h-screen bg-fade transition-colors duration-500">
      {/* header */}
      <div className="flex justify-center">
        <div className="head flex items-center h-20 justify-between w-full max-w-6xl mx-4 sm:mx-8 p-3 bg-white dark:bg-slate-900 rounded-2xl mt-10">
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Logo" className="size-28" />
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="mode bg-gray-300 dark:bg-gray-700 p-2 rounded-full"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <img src="/images/icon-sun.svg" alt="sun" className="size-8" />
            ) : (
              <img src="/images/icon-moon.svg" alt="moon" className="size-8" />
            )}
          </button>
        </div>
      </div>

      {/* filter buttons */}
      <div className="flex gap-3 justify-center mt-6 px-4 sm:px-0">
        <button onClick={() => setFilter('all')} className="px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-500">All</button>
        <button onClick={() => setFilter('active')} className="px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-500">Active</button>
        <button onClick={() => setFilter('inactive')} className="px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-500">Inactive</button>
      </div>

      {/* grid */}
      <main className="max-w-6xl mx-4 sm:mx-8 lg:mx-auto mt-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <article
              key={item.id}
              className="card bg-white dark:bg-slate-950 rounded-3xl border border-gray-200 dark:border-gray-700 p-5 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <img src={item.img} alt={item.title} className="w-12 h-12 rounded-md" />
                  <h2 className="font-bold text-lg dark:text-white">{item.title}</h2>
                </div>

                <p className="text-sm font-semibold">
                  {item.text}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 text-white rounded-lg px-4 py-2 min-h-[40px]"
                >
                  Remove
                </button>

                <button
                  className={`toggle ${item.toggled ? 'toggled' : ''}`}
                  onClick={() => toggledId(item.id)}
                  aria-pressed={item.toggled}
                >
                  <div className="thumb"></div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );

}

export default App