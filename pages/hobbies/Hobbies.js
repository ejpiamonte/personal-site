import './Hobbies.css';
import categories from '../../components/categories/data/data';

export default function Hobbies() {

    const leftImages = () => {
        return (
            <div>
                <img alt='hobbies' className='categories' src={categories.hobbies} />
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                <div className='description_title'>Hobbies</div>
                    <ul>
                        <li>One to make you money, one to keep you</li>
                        <li>in shape and one to be creative.</li>
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