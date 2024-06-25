"use client"

export default function About() {
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'justify' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
                <strong style={{ fontSize: '24px' }}>About</strong>
            </div>
            <div style={{ maxWidth: '800px', marginTop: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Welcome to SmartOrder</h1>
                <p style={{ marginBottom: '20px' }}>
                    Welcome to SmartOrder, the innovative web-order application designed to elevate your dining experience!
                    SmartOrder allows you to seamlessly place orders at your favorite restaurant using your smartphone or tablet,
                    bringing convenience and efficiency right to your fingertips.
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>What is SmartOrder?</h2>
                <p style={{ marginBottom: '20px' }}>
                    SmartOrder is a cutting-edge web-based platform that empowers customers to browse menus, customize orders,
                    and complete transactions without the need for traditional paper menus or waiting for a server. Our goal is
                    to streamline the ordering process, reduce wait times, and enhance overall customer satisfaction.
                </p>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Why Choose SmartOrder?</h2>
                <ul style={{ marginBottom: '20px' }}>
                    <li><strong>Ease of Use:</strong> Simply scan the QR code on your table or visit our website to start ordering. No app downloads or registrations required.</li>
                    <li><strong>Real-Time Menu Updates:</strong> Always stay updated with the latest menu offerings, specials, and availability.</li>
                    <li><strong>Customizable Orders:</strong> Personalize your meal with easy-to-use customization options to suit your dietary preferences and tastes.</li>
                    <li><strong>Quick and Efficient:</strong> Place your order directly from your device and enjoy faster service, reducing the time you spend waiting.</li>
                    <li><strong>Contactless Experience:</strong> Enhance safety and hygiene with a fully contactless ordering process, minimizing physical interactions.</li>
                </ul>
                
                <h2 style={{ textAlign: 'center', marginTop: '40px' }}>How It Works:</h2>
                <ol style={{ marginBottom: '20px' }}>
                    <li><strong>Scan the QR Code:</strong> Use your smartphone or tablet to scan the QR code at your table or on promotional materials.</li>
                    <li><strong>Browse the Menu:</strong> Explore the restaurant's offerings, complete with descriptions and images to help you make informed choices.</li>
                    <li><strong>Customize Your Order:</strong> Tailor your selections to your preferences, including special requests or dietary requirements.</li>
                    <li><strong>Place Your Order:</strong> Review your order and submit it directly to the kitchen with just a few taps.</li>
                    <li><strong>Enjoy Your Meal:</strong> Sit back and relax while your freshly prepared meal is brought to your table.</li>
                </ol>
            </div>
        </div>
    )
}
