import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis',
            img: fluoride

        },
        {
            id: 2,
            name: 'Cavity Filing',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis',
            img: cavity

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis',
            img: whitening

        }
    ]

    return (
        <div>
            <div className='text-center mt-5'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8' >
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>

        </div>
    );
};

export default Services;