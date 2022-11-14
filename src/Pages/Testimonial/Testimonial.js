import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews =[
        {
            _id:1,
            name:'Winson Henry',
            img: people1,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque voluptas hic. Iste inventore distinctio officia et eum, maiores magnam excepturi sit temporibus ea explicabo sint reiciendis, mollitia ipsa sunt.",
            location:'California'
        },
        {
            _id:1,
            name:'Winson Henry',
            img: people2,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque voluptas hic. Iste inventore distinctio officia et eum, maiores magnam excepturi sit temporibus ea explicabo sint reiciendis, mollitia ipsa sunt.",
            location:'California'
        },
        {
            _id:1,
            name:'Winson Henry',
            img: people3,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque voluptas hic. Iste inventore distinctio officia et eum, maiores magnam excepturi sit temporibus ea explicabo sint reiciendis, mollitia ipsa sunt.",
            location:'California'
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                     <img className='w-24 lg:w-48' src={quote} alt=""  />
                </figure>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    reviews.map(review=><Review  
                    key={review.id}
                    review={review}

                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonial;