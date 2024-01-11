import './Travel.css';
import categories from '../../components/categories/data/data';

export default function Travel() {

    const leftImages = () => {
        return (
            <div>
                <img alt='travel' className='categories' src={categories.travel} />
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                <div className='description_title'>Travel</div>
                    <ul>
                        <li>You don't have to be rich to travel well.</li>
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