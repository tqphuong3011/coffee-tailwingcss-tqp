import './tailwindcss/output.css';
// eslint-disable-next-line
function App() {

  document.addEventListener('click', (e) => {
    const topMenu = document.getElementById('tqp-top-menu');
    if (e.target.id === 'tqp-toggle-top-menu-icon') {
      topMenu.classList.toggle('tqp-topmenu-expanded');
      topMenu.classList.toggle('hidden');
    }
    else{
      if (topMenu.classList.contains('tqp-topmenu-expanded')) {
        topMenu.classList.remove('tqp-topmenu-expanded');
        topMenu.classList.add('hidden');
      }
    }
  });

  return (
        <div className='content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8 bg-slate-200'>
          <header className='p-6 mx-auto'>
            <nav className='flex flex-row justify-between items-center relative'>
              <div className='logo basis-2/6 text-center text-xl font-semibold cursor-pointer'>
                CoffeeStyle.  
              </div>
              <ul id='tqp-top-menu' className='basis-3/6 hidden  lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium '>
                <li className='tqp-top-menu-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='tqp-top-menu-item'>
                  <a href='#'>Products</a>
                </li>
                <li className='tqp-top-menu-item'>
                  <a href='#'>About</a>
                </li>
                <li className='tqp-top-menu-item'>
                  <a href='#'>Contact</a>
                </li>
                <li className='tqp-top-menu-item tqp-top-menu-item-active'>
                  <a href='#'>StyleGuide</a>
                </li>
              </ul>
              <ul className='basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium'>
                <li className='tqp-top-menu-item'>
                  <a href='#' className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="tqp-icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className='mx-2'>Cart</span>
                    <span className='tqp-badge-circle bg-orange-400 text-white'>10</span>
                  </a>
                </li>
              </ul>
              <div className='basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8'>
                <svg id='tqp-toggle-top-menu-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tqp-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </nav>
          </header>
          
          <main>

            {/* start slider */}
            <div className='slider'>
              slider
            </div>

            {/* start story */}
            <div className='story'>
              story
            </div>

            {/* start featured-mugs */}
            <div className='featured-mugs'>
              featured-mugs
            </div>

            {/* start more-products */}
            <div className='more-products'>
              more-products
            </div>

            {/* start lifestyle-stories */}
            <div className='lifestyle-stories-mugs'>
              lifestyle-stories
            </div>

            {/* start subcrise-us */}
            <div className='subcrise-us'>
            subcrise-us
            </div>

          </main>

          <footer>
            
            footer
          
          </footer>
        </div>
  );
}

export default App;
