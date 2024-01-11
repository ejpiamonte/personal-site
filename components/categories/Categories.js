import { useState } from 'react';
import './Categories.css';
import categories from './data/data';

export default function Categories() {
    const [activeCategories, setActiveCategories] = useState(0);

    const tabButtonHandler = (categoriesNum) => {
        setActiveCategories(categoriesNum);
    };

    const tabButtons = () => {
        return (
            <div className='tabButtons'>
                <button onClick={() => tabButtonHandler(0)} type='btton'>Fitness</button>
                <button onClick={() => tabButtonHandler(1)} type='btton'>Hobbies</button>
                <button onClick={() => tabButtonHandler(2)} type='btton'>travel</button>
                <button onClick={() => tabButtonHandler(3)} type='btton'>Food</button>
                <button onClick={() => tabButtonHandler(4)} type='btton'>Family</button>
            </div>
        );
    };

    const leftImages = () => {
        return (
            <div>
                {activeCategories === 0 && <img alt='fitness' className='categories' src={categories.fitness} />}
                {activeCategories === 1 && <img alt='hobbies' className='categories' src={categories.hobbies} />}
                {activeCategories === 2 && <img alt='travel' className='categories' src={categories.travel} />}
                {activeCategories === 3 && <img alt='food' className='categories' src={categories.food} />}
                {activeCategories === 4 && <img alt='family' className='categories' src={categories.family} />}
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                {activeCategories === 0 && (
                    <>
                        <div className='description_title'>Fitness</div>
                        <div className='description_list'>
                            <ul>
                                <li>If you want something you've never had, you must</li> 
                                <li>be willing to do something you've never done</li>
                            </ul>
                        </div>
                    </>
                )}

                {activeCategories === 1 && (
                    <>
                        <div className='description_title'>Hobbies</div>
                        <div className='description_list'>
                            <ul>
                                <li>One to make you money, one to keep you</li>
                                <li>in shape and one to be creative.</li>
                            </ul>
                        </div>
                    </>
                )}

                {activeCategories === 2 && (
                    <>
                        <div className='description_title'>Travel</div>
                        <div className='description_list'>
                            <ul>
                                <li>You don't have to be rich to travel well.</li>
                            </ul>
                        </div>
                    </>
                )}

                {activeCategories === 3 && (
                    <>
                        <div className='description_title'>Food</div>
                        <div className='description_list'>
                            <ul>
                                <li>First, we eat. Then, we do everything else.</li>
                            </ul>
                        </div>
                    </>
                )}

                {activeCategories === 4 && (
                    <>
                        <div className='description_title'>Family</div>
                        <div className='description_list'>
                            <ul>
                                <li>The memories we make with our family is everything.</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className='categories_section'>
            {tabButtons()}
            <div className='main'>
                {leftImages()}
                {rightDescriptions()}
            </div>
        </div>
    );
};