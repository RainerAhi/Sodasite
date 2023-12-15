import React from "react";

export const SectionTwo = () => {
    return (
        <section className="section two" >

        <div className="left" >

        <div className="info-main" >
            <p className="other" >PREMIUM QUALITY</p>
            <h1 className="soda" >SODA</h1>
            <p className="other" >330 ML</p>
        </div>
        <div className="info-ingredients" >
            <p className="ing" >INGREDIENTS</p>
            <h1 className="other" >WATER, ORGANIC APPLE JUICE, BLACK TEA, CARBON DIOXIDE, ANTIOXIDANT</h1>
        </div>

        </div>

        <div className="drinkbox" >

        </div>

        <div className="right" >

            <div>
                <h1 className="ing" >INTRODUCION TO DRINK</h1>
                <p className="long" >This unique concoction combines the crisp sweetness of organic apple juice with the subtle sophistication of black tea, fizzed to perfection with natural carbon dioxide. </p>
            </div>

            <div className="foodinfo-container" >
                <div className="foodinfo" >
                    <div className="food-text" >
                        <h1 className="ing" >CALORIES</h1>
                        <h1 className="other" >160</h1>
                    </div>
                    <div className="border-vertical" />
                    <div className="food-text" >
                        <h1 className="ing" >PROTEIN</h1>
                        <h1 className="other" >0.3g</h1>
                    </div>
                </div>
                <div className="border" />
                <div className="foodinfo" >
                    <div className="food-text" >
                        <h1 className="ing" >SUGAR</h1>
                        <h1 className="other" >5g</h1>
                    </div>
                    <div className="border-vertical" />
                    <div className="food-text" >
                        <h1 className="ing" >VITAMIN C</h1>
                        <h1 className="other" >10mg</h1>
                    </div>
                </div>
            </div>

        </div>

        </section>
    )
}