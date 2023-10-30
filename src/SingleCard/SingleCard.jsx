import React from 'react';

const SingleCard = (props) => {
    const {img,discription,title,credit,price} = props;
    // console.log(props);
    return (
        <div>
            <div className="card shadow-2xl">
  <figure className="">
    <img style={{width:'400px',height:'250px'}} src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='text-xl'>{discription}</p>
   <div className='flex border-2 w-full justify-between text-2xl items-center text-center'>
    <div className='flex '>
        <div className='mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
        <div className='ml-3'>price: {price}</div>
    </div>
    <div className='flex'>
        <div className='mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
</div>
        <div className='ml-3'>Credit: {credit} hr</div>
    </div>
   </div>
    <button onClick={()=> props.handleSelectBtn(title,credit,price)} className="btn w-[100%] btn-primary">Enroll</button>
  </div>
</div>
        </div>
    );
};

export default SingleCard;