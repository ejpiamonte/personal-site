import './Food.css';
import categories from '../../components/categories/data/data';

export default function Food() {

    const leftImages = () => {
        return (
            <div>
                <img alt='food' className='categories' src={categories.food} />
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                <div className='description_title'>Food</div>
                    <ul>
                        <li>First, we eat. Then, we do everything else.</li>
                    </ul>
            </div>
        );
    };

    return (    
            <div className='main'>
                {leftImages()}
                {rightDescriptions()}
            </div>
    );
    


};