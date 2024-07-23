export default function Reviews() {
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'justify' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                <strong style={{ fontSize: '24px' }}>Customer Reviews</strong>
            </div>
            <div style={{ maxWidth: '800px', marginTop: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>What Our Customers Are Saying</h1>
                <p style={{ marginBottom: '20px' }}>
                    We value the feedback from our customers and strive to continually improve our service. Here are some of the reviews from diners who have experienced SmartOrder.
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Excellent Experience!</h2>
                <p style={{ marginBottom: '20px' }}>
                    <strong>John D.</strong><br/>
                    "Using SmartOrder was a game changer! The ease of scanning the QR code and browsing the menu on my phone was incredible. The real-time updates ensured that I got exactly what I wanted, and the customization options made it perfect for my dietary needs. Highly recommend!"
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Fast and Convenient</h2>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Emily R.</strong><br/>
                    "SmartOrder made my dining experience so much more enjoyable. No more waiting for a server to take my order. I loved how quickly I could place my order and get my food. The contactless process also made me feel safe during these times."
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Perfect for Groups</h2>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Michael B.</strong><br/>
                    "We used SmartOrder during a family outing, and it was perfect. Everyone could customize their orders and add special requests without any confusion. The process was smooth, and the service was faster than we expected. A great tool for dining out!"
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>User-Friendly Interface</h2>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Samantha K.</strong><br/>
                    "The SmartOrder interface is incredibly user-friendly. It took me no time to figure out how to use it. The visuals and descriptions of the dishes helped me decide what to order. The whole process was seamless and efficient."
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Great for Special Requests</h2>
                <p style={{ marginBottom: '50px' }}>
                    <strong>David L.</strong><br/>
                    "I have specific dietary restrictions, and SmartOrder made it so easy to customize my meal. The detailed options for customization ensured that my meal was prepared exactly to my preferences. I will definitely be using this service again!"
                </p>
            </div>
        </div>
    )
}
