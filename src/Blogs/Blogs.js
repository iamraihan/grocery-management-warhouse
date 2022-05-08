import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> Difference between javascript and nodejs?</h2>
                <p className='text-2xl'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript run in server side (backend). basically javascript only run browser using browser engine Ryan Dahl made node js so it can run whiteout browser. thats why node js can run machine so it use mobile apps but most likely use in web development.

                    Overhand, javascript scripting and it is high level programming language. it is use mostly use in web development.
                    Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox google Chrome v8 engine.
                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    javascript only run browser overhand but node run using v8 engine thats why it run in backend also.

                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> When should you use nodejs and when should you use mongodb?</h2>
                <p className='text-2xl'>
                    when we working in backend it mean server side we use run node js. overhand mongodb using as database where we insert data. last decade node js make very popular  Node.js is growing rapidly not only in start-ups but also in enterprise companies like Amazon, Netflix, eBay, LinkedIn, Paypal. javascript only run in front end project but when come node js javascript being fullstack programming language.

                    MongoDB facilitate to store database in json like an object and this  is very fast and efficient so you should use it when you have key value pair to store json data

                    one of the best advantage with MongoDB is you can store a collection inside another collection.
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> Differences between sql and nosql databases.?</h2>
                <p className='text-2xl'>
                    SQL databases are primarily call Relational Databases otherhand NoSQL databases are primarily called as Non-relational or distributed database.
                    basically, sql is  Structured query language SQL otherhand	No declarative query language is no sql. sql data is like table but no sql document base like key value pairs.
                    SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> What is the purpose of jwt and how does it work?</h2>
                <p className='text-2xl'>
                    JWT, or JSON Web Token, is an open standard used to share security information between client server and server side.  JWT contains encoded JSON objects.

                    JWT using for is not to hide data but to ensure the authenticity of the data it data make more secure. usig jwt data make encoded. some pepole called it token based authentication
                </p>
            </div>
        </div>
    );
};

export default Blogs;