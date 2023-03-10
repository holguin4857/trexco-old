import Head from 'next/head'
import Navbar from "@/components/Navbar";
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <Head>
        <title>trexco</title>
        <meta name="description" content="the easy way to ship worldwide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
      </div>

      <section className='container'>
        <div className='content'>
          <h1>the easy way to ship worldwide</h1>
          <p>trexco is a practical and affordable shipping solution located in the UK and focused on sea and air transport to the US, Canada, Mexico and South America.</p>
          <button className='button'><Link href="https://trexco.involve.me/trexco-personalized-quote">Book now</Link></button>
        </div>
        <div className='image'>
          <img src='images/container1.png' alt='' width="600px" />
        </div>
      </section>

      <section className='container-2'>
        <div className='content-2'>
          <h2>Pack it, Label it, Send it.. Simple!</h2>
        </div>
      </section>



      <section className='column-3'>
        <div className='column'>
          <img src='images/man-compu-cat-round.webp' />
          <h2>Place an order</h2>
          <p>Pick the trexco pallet boxes you need for your shipment and book the delivery and collection date.</p>
        </div>
        <div className='column'>
          <img src='images/box-and-cat-round.webp' />
          <h2>Start packing</h2>
          <p>Pack your shipment on the pallet boxes, start packing the heavy stuff first and fragile on the top, seal and label the box.</p>
        </div>
        <div className='column'>
          <img src='images/man-and-truck-round.webp' />
          <h2>Arrange collection</h2>
          <p>Choose the collection date a driver will load your shipment with a pallet truck and will be sent to your destination.</p>
        </div>
      </section>


      <section className='container-2'>
        <div className='content-2'>
          <h2>Trexco have simplified shipping by using an easy, convenient way to pack, store, and move your cargo - all at the same time!</h2>
        </div>
      </section>

      <section className='container'>
        <div className='content'>
          <h1>how it works</h1>
          <p>We offer do-it-yourself shipping options, for those who might be looking for an easy, affordable, efficient, way to ship.</p>
          <button className='button'><Link href="https://trexco.involve.me/trexco-personalized-quote">Book now</Link></button>
        </div>
        <div className='image'>
          <img src='images/man-compu-cat-round.png' alt='' width="600px" />
        </div>
      </section>


      <section className='container'>
        <div className='content'>
          <h1>shipping with confidence</h1>
          <p>We have secured competitive shipping rates to many destinations around the world, from air, road or sea shipment. We have over 17 years of experience as freight forwarders.</p>
        
        </div>
      
      </section>

      
      <article class="footer">
        <div className='columns'>
        <article class="column">
          <h3>FAQ</h3>
          <ul>
              <li><Link href='faq'>FAQ</Link></li>
              <li><Link href='how'>How it works</Link></li>
              <li><Link href='contact'>Contact us</Link></li>
          </ul>
        </article>
        <article class="column">
          <h3>terms</h3>
          <ul>
               <li><Link href='prohibited'>Prohibited items</Link></li>
              <li><Link href='privacy'>Privacy policy</Link></li>
              <li><Link href='terms'>Terms & conditions</Link></li>
            </ul>   
        </article>
        </div>
      </article>






    </>
  )
}
