import React from 'react';
import './Card.css';
import Swal from 'sweetalert2';
import SingleCard from '../SingleCard/SingleCard';
import img from '../assets/Rectangle 2.png';
import img1 from '../assets/Rectangle 2-1.png';
import img2 from '../assets/Rectangle 2-2.png';
import img3 from '../assets/Rectangle 2-3.png';
import img4 from '../assets/Rectangle 2-4.png';
import img5 from '../assets/Rectangle 2-5.png';
import img6 from '../assets/Rectangle 2-6.png';
import img7 from '../assets/Rectangle 3.png';
import img8 from '../assets/Rectangle 3-1.png';
let totalCredit=0,totalPrice=0,ind=0,remainingCredit=20;
const ar=[];
const Card = () => {
    const handleSelectBtn = (title,credit,price) => {
       let ok =ar.includes(title);
       if(totalCredit+credit>20)
       {
        Swal.fire(
            'Out of credit!',
            " ",
            'error'
          )
       }
       else if(!ok && totalCredit+credit<=20){
            ar.push(title);
            ++ind;
            totalCredit+=credit;
            remainingCredit-=credit;
            totalPrice+=price;
            document.getElementById('total-price').innerText = totalPrice;
            document.getElementById('total-credit').innerText = totalCredit;
            document.getElementById('credit-remaining').innerText = remainingCredit;
            const h1 = document.createElement('h1');
            h1.innerText=ind+". "+ title;
            h1.classList.add('text-2xl');
            h1.classList.add('my-3');
             document.getElementById('course-name').appendChild(h1);
             
        }
        else{
            
            Swal.fire(
                'You Wont able to enroll more than one!',
                " ",
                'error'
              )
        }
        
       
       
    }
    const discription = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
    return (
       <div className='flex'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 lg:my-10 gap-5 w-[75%]'>
            <div className=''>
                <SingleCard img={img} handleSelectBtn={handleSelectBtn} title="Introduction to OOP Python" discription={discription} price={19000} credit={5}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img1} handleSelectBtn={handleSelectBtn} title="Database (MySQL)" discription={discription} price={19000} credit={5}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img2} handleSelectBtn={handleSelectBtn} title="Introduction to C Programming"discription={discription} price={15000} credit={1}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img3} handleSelectBtn={handleSelectBtn} title="Introduction to Algorithms" discription={discription} price={25000} credit={2}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img4} handleSelectBtn={handleSelectBtn} title="Introduction to C++ for DSA" discription={discription} price={10000} credit={10}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img5} handleSelectBtn={handleSelectBtn} title="Software Engineering" discription={discription} price={23000} credit={2}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img6} handleSelectBtn={handleSelectBtn} title="Problem-Solving Part" discription={discription} price={23000} credit={2}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img7} handleSelectBtn={handleSelectBtn} title="Basic Data Structures" discription={discription} price={35000} credit={5}></SingleCard>
            </div>
            <div className=''>
                <SingleCard img={img8} handleSelectBtn={handleSelectBtn} title="AWS, Cloud Computing" discription={discription} price={35000} credit={5}></SingleCard>
            </div>
        </div>
       <div className='relative'>
       <div className='lg:mx-5 lg:my-10 fixed lg:mt-90 sm:mt-10'>
            <h1 className='text-2xl font-bold text-center'>Credit Hour Remaining <span id='credit-remaining'>20</span> hr</h1>
            <hr className='my-5'/>
            <h1 className='text-2xl font-bold text-center'>Course Name</h1>
            <div id='course-name'></div>
            <hr className='my-5'/>
            <h1 className='text-2xl font-bold text-left my-3' >Total Credit Hour : <span id='total-credit'>0</span> </h1>
            <hr className='my-5'/>
            <h1 className='text-2xl font-bold text-left my-3' >Total Price : <span id='total-price'>0</span>  USD </h1>
            </div>
       </div>
       </div>
    );
};

export default Card;