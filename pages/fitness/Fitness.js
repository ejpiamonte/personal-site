import './Fitness.css';
import categories from '../../components/categories/data/data';
export default function Fitness() {

    const leftImages = () => {
        return (
            <div>
                <img alt='fitness' className='categories' src={categories.fitness} />
            </div>
        );
    };

    const rightDescriptions = () => {
        return (
            <div className='descriptions'>
                <div className='description_title'>Fitness</div>
                    <ul>
                        <li>If you want something you've never had, you must</li> 
                        <li>be willing to do something you've never done</li>
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