import { useState } from 'react';
import menu from './Manudata';
import './Menu.css';

export const Menu = () => {

  return (
    <>
    
      <section class="menu">
      <div class="title">
        <h2>our menu</h2>
        <div class="underline"></div>
      </div>
     
      <div class="btn-container">
        <button type="button" class="filter-btn" data-id="all">all</button>
        <button type="button" class="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" class="filter-btn" data-id="lunch">lunch</button>
        <button type="button" class="filter-btn" data-id="shakes">
          shakes
        </button>
      </div>

            
      <div class="section-center"> 
       

        {menu.map((menum) => (<article class="menu-item">
          <img src="./menu-item.jpeg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>{menum.title}</h4>
              <h4 class="price">{menum.price}</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>))}

        
       
        <article class="menu-item">
          <img src="./menu-item.jpeg" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>buttermilk pancakes</h4>
              <h4 class="price">$15</h4>
            </header>
            <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
          </div>
        </article>
     
      </div>
    </section>
    </>
  )
}
