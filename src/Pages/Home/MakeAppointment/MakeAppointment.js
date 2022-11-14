import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}

        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 rounded-lg shadow-2xl -mt-36 hidden md:block" alt='' />
                    <div>
                        <h2 className='text-lg text-primary font-bold'>Appointment</h2>
                        <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci exercitationem iure deserunt libero quas, obcaecati consequatur aliquam voluptate aperiam veritatis accusantium sequi cupiditate modi laborum? Magnam aliquid ullam suscipit.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;