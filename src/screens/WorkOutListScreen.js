import React from 'react';
import { View, FlatList, Text } from 'react-native';
import WorkOutDetail from '../Components/WorkOutDetail';

const WorkOutListScreen = (props) => {
    console.log(props)
    const worktOuts = [
        {   
            workOut: 'Bicep-curls',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        },
        {
            workOut: 'Flat-Bench Bench Press',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        },
        {
            workOut: 'Tricep extentions',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        },
        {
            workOut: 'Skull Crushers',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'

        },
        {
            workOut: 'Incline Bench Press',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        },
        {
            workOut: 'Decline Bench Press',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        },
        {
            workOut: 'Squats',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
    },
        {
          workOut: 'Weight Lunges',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        },        
        {
            workOut: 'Pull Downs',
            imgSrc: 'https://via.placeholder.com/150',
            description: 'Spicy jalapeno bacon ipsum dolor amet laboris ex et quis ground round qui turkey anim reprehenderit rump laborum.'
        }
    ]
    return(
        <View>
            <FlatList 
                data={ worktOuts }
                keyExtractor={(item, index) => index}
                renderItem={ ({ item }) =>  <WorkOutDetail workOut={item.workOut} imgSrc={item.imgSrc} description={item.description}/> }
            />
        </View>
    )
}

export default WorkOutListScreen