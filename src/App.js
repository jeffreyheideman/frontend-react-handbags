import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Product from "./components/Product";
import Tile from "./components/Tile";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button name="to the collection" disabled={false}/>
                <Button name="shop all bags" disabled={false}/>
                <Button name="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product span="Best seller" image={bag1} name="The handy bag" price="400"/>
                <Product span="Best seller" image={bag2} name="The stylish bag" price="250"/>
                <Product span="New collection" image={bag3} name="The simple bag" price="300"/>
                <Product span="New collection" image={bag4} name="The trendy bag" price="150"/>
            </main>
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur debitis dolores facilis libero molestias nesciunt placeat repellendus tenetur veniam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex illo laborum laudantium nam natus necessitatibus non nostrum optio quasi quod?</p>
                </Tile>
                <Tile>
                    <img src={brand} alt="The Brand"/>
                </Tile>
                <Tile>
                    <img src={ourStory} alt="Our Story"/>
                </Tile>
                <Tile>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid, atque blanditiis corporis delectus deleniti doloribus ea eveniet inventore quasi quibusdam sequi temporibus tenetur? Debitis esse inventore minima minus natus.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



