import './Secondnav.css'
export default function Secondnav({ activeNav}) {
    const nav0 = () => {
        return (
            <div className='secondnav_container'>
                <div></div>
                <div></div>
            </div>
        );
    };

    const nav1 = () => {
        return (
            <div className='secondnav_container'>
                <div>Exercises</div>
                <div>Progression</div>
            </div>
        );
    };

    const nav2 = () => {
        return (
            <div className='secondnav_container'>
                <div>House Hobbies</div>
                <div>Sports</div>
            </div>
        );
    };

    const nav3 = () => {
        return (
            <div className='secondnav_container'>
                <div>Local</div>
                <div>International</div>
            </div>
        );
    };

    const nav4 = () => {
        return (
            <div className='secondnav_container'>
                <div>Homemade</div>
                <div>Restaurants</div>
            </div>
        );
    };

    const nav5 = () => {
        return (
            <div className='secondnav_container'>
                <div>Gathering</div>
                <div>Bonding</div>
            </div>
        );
    };

    const nav6 = () => {
        return (
            <div className='secondnav_container'>
                <div>Character</div>
                <div>Profession</div>
            </div>
        );
    };

    const navState = (navIndex) => {
        switch (navIndex) {
            case 0:
                return nav0();
            case 1:
                return nav1();
            case 2:
                return nav2();
            case 3:
                return nav3();
            case 4:
                return nav4();
            case 5:
                return nav5();
            case 6:
                return nav6();
            default:
                return nav0();
        };
    };
    return (
        <div className='secondnav'>
            {navState(activeNav)}
        </div>
    );
};