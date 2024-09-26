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
        <div className='content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8 '>
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
            <div className="slider h-[530px] mb-24 bg-[url('../../public/img/slider-bg.png')] bg-cover bg-no-repeat bg-bottom -mx-[32px] lg:mx-0">
              <div className='w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40'>
                <div className='mx-16 text-white text-center'>
                  <div className='uppercase font-bold text-xs tracking-widest opacity-80'>BEST PLACE TO BUY COFFEE</div>
                  <div className='font-normal text-5xl my-3 '>Coffee Mugs</div>
                  <div className='text-lg mb-8 opacity-90'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
                  <div className='flex justify-center'>
                    <div className='tqp-button w-max bg-white text-gray-900'>
                      EXPLORE OUR PRODUCTS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* start story */}
            <div className='story tqp-content '>
                <div className='w-[90%] md:w-[70%] text-center'>
                  <h2 className='text-title-story leading-10 my-5 font-normal '>
                    Even the all-powerful Pointing has no control about the blind texts.
                  </h2>
                  <p className='text-base leading-7 text-story-content mb-[25px] font-normal'>
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic 
                    life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the 
                    far World of Grammar.
                  </p>
                  <div>
                    <a href='#' className='text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 
                    after:left-0 after:bg-coffee-50 hover:after:bg-coffee-400 after:w-full after:h-0.5 after:transition-all after:ease-in-out after:duration-500'>
                      Read the full Story
                    </a>
                  </div>
                </div>
            </div>

            {/* start featured-mugs */}
            <div className='featured-mugs tqp-content'>
              <div className='tqp-subhead-line'></div>
              <div className='tqp-subhead '>featured mugs</div>
              <div className='tqp-subhead-line'></div>
            </div>
            <div className='featured-mugs-list tqp-content'>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 '>
                <div className='tqp-product-card'> 
                  <div className="h-[380px] md:h-[540px] bg-[url('../../public/img/product-01.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>Pink Premium Ceramic </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 99.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card'> 
                  <div className="h-[380px] md:h-[540px] bg-[url('../../public/img/product-02.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                        <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                          <div className='absolute w-[100px] py-[6px] px-[15px] top-3 right-3 text-center 
                          bg-white font-semibold text-coffee-400'>
                            On Sale.
                          </div>
                          <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                          bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                            Explore Mug
                          </div>
                        </div>
                      </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>Golden Designers Mug</div>
                    </a>
                    <div className=''>
                      <span className='text-[20px] text-coffee-400'>$50.00</span>
                      <span className='ml-2 text-gray-400 line-through'>$ 69.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* start more-products */}
            <div className='tqp-content'>
              <div className='tqp-subhead-line'></div>
              <div className='tqp-subhead '>more products</div>
              <div className='tqp-subhead-line'></div>
            </div>
            <div className='tqp-content'>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4'>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-01.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='absolute w-[100px] py-[6px] px-[15px] top-3 right-3 text-center 
                        bg-white font-semibold text-coffee-400'>
                          On Sale.
                        </div>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Red Love Cup 
                      </div>
                    </a>
                    <div className=''>
                      <span className='text-[20px] text-coffee-400'>$25.00</span>
                      <span className='ml-2 text-gray-400 line-through'>$ 37.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-02.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='absolute w-[100px] py-[6px] px-[15px] top-3 right-3 text-center 
                        bg-white font-semibold text-coffee-400'>
                          On Sale.
                        </div>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Black Tea Cup
                      </div>
                    </a>
                    <div className=''>
                      <span className='text-[20px] text-coffee-400'>$15.00</span>
                      <span className='ml-2 text-gray-400 line-through'>$ 29.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-03.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        B&W Essentials Mug
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 19.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-04.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Winter Style Mug 
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 25.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-05.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Ceramic Tea
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 46.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-06.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        No Handle Bar Cup 
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 34.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-07.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Espresso Cup by Mugs.co
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 25.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-08.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Pink Premium Ceramic 
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 99.00 USD</span>
                    </div>
                  </div>
                </div>
                <div className='tqp-product-card mb-[50px]'> 
                  <div className="h-[380px] bg-[url('../../public/img/more-product-09.jpg')] bg-cover bg-no-repeat bg-center">
                    <a href='#'>
                      <div className='h-full w-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group'>
                        <div className='tqp-button absolute w-[90%] bottom-4 left-1/2 -translate-x-1/2 
                        bg-white text-gray-900 hidden group-hover:block group-hover:animate-fadeIn'>
                          Explore Mug
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='text-center mt-8'>
                    <a href='#'>
                      <div className='text-xl mb-3 hover:text-coffee-400 text-[#1d1f2e]'>
                        Summer Designer Cup
                      </div>
                    </a>
                    <div className=''>
                      <span className='ml-2 text-gray-500'>$ 29.00 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* start coffe magazine */}
            <div className='tqp-content'>
              <div className='tqp-subhead-line'></div>
              <div className='tqp-subhead '>buy 2 mugs and get a coffee magazine free</div>
              <div className='tqp-subhead-line'></div>
            </div>
            <div className='tqp-content'>
              <div className='w-full flex flex-row justify-center items-center gap-5'>
                <div className='tqp-magazine-imgs basis-1/2 flex flex-row gap-5'> 
                    
                    <div className="tqp-magazine-big-img h-[280px] basis-2/3 bg-[url('../../public/img/magazine-product-01.jpg')] bg-cover bg-no-repeat bg-center">
                    </div>

                    <div className="tqp-magazine-small-imgs basis-1/3 flex flex-col gap-5">
                      <div className="tqp-magazine-small-img-01 h-[130px] bg-[url('../../public/img/magazine-product-02.jpg')] bg-cover bg-no-repeat bg-center">
                      </div>
                      <div className="tqp-magazine-small-img-02 h-[130px] bg-[url('../../public/img/magazine-product-03.jpg')] bg-cover bg-no-repeat bg-center">
                      </div>
                    </div>

                </div>
                <div className='tqp-magazine-content basis-1/2'> 
                  <div className=''>PREMIUM OFFER</div>
                  <div className=''>Get our Coffee Magazine</div>
                  <div className=''>The most versatile furniture system ever created. Designed to fit your life.</div>
                  <div className='w-max bg-story-content text-white tqp-button'>START SHOPPING</div>
                </div>
              </div>
            </div>

            {/* start lifestyle-stories */}
            <div className='tqp-content'>
              <div className='tqp-subhead-line'></div>
              <div className='tqp-subhead '>behind the mugs, lifestyle stories</div>
              <div className='tqp-subhead-line'></div>
            </div>
            <div className='tqp-content'>
              lifestyle stories
            </div>

            {/* start subcrise-us */}
            {/* <div className='subcrise-us tqp-content'>
            subcrise-us
            </div> */}

          </main>

          <footer>
            
            footer
          
          </footer>
        </div>
  );
}

export default App;
