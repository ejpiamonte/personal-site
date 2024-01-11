import './Family.css';
import categories from '../../components/categories/data/data';

export default function Family() {

    const leftImages = () => {
        return (
            <div>
                <img alt='family' className='categories' src={categories.family} />
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                <div className='description_title'>Family</div>
                    <ul>
                        <li>The memories we make with our family is everything.</li>
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