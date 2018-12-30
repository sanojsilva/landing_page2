import Food from './Food';
import Grid from '@material-ui/core/Grid';

const FoodList = (props) => {
    const foodArray = [];

    switch (props.type) {
        case 'SPECIAL':
            const specialArray = [
                {
                    name: 'Garden Salad',
                    price: '300',
                },
                {
                    name: 'Turkey Pot Pie',
                    price: '800',
                },
                {
                    name: 'Seared Scallops',
                    price: '280',
                }
            ];

            foodArray.push(specialArray);
            
            break;
        case 'BREAKFAST':
            const breakfastArray = [
                {
                    name: 'Bessell Breakfast',
                    price: '300',
                },
                {
                    name: 'Cake',
                    price: '800',
                },
                {
                    name: 'Chicken and Waffle',
                    price: '280',
                }
            ];

            foodArray.push(breakfastArray);
            
            break;
        case 'LUNCH':
            const lunchArray = [
                {
                    name: 'Rice and Curry',
                    price: '300',
                },
                {
                    name: 'Salad',
                    price: '800',
                },
                {
                    name: 'Broccolli',
                    price: '280',
                }
            ];

            foodArray.push(lunchArray);
            break;
        case 'DINNER':
            const dinnerArray  = [
                {
                    name: 'Sea Food Rice',
                    price: '300',
                },
                {
                    name: 'Spicy Tropical',
                    price: '800',
                },
                {
                    name: 'Beer-Brined',
                    price: '280',
                }
            ];

            foodArray.push(dinnerArray);
            
            break;
        case 'SNACKS':
            const snacksArray = [
                {
                    name: 'Momos',
                    price: '300',
                },
                {
                    name: 'Chicken Poppers',
                    price: '800',
                },
                {
                    name: 'Munchi Tikiri Marie',
                    price: '280',
                }
            ];

            foodArray.push(snacksArray);
            
            break;
        
        default:
            
         foodArray.push(snacksArray);
    }

    return (
        <Grid container spacing={16}>
            {foodArray[0].map((item, index) => (
                <Grid item xs key={index}>
                    <Food title={item.name} price={item.price} /> 
                </Grid>
            ))}
        </Grid>
    )
}

export default FoodList;
