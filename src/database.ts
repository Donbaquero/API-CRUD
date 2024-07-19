import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/technical-test-Baquero');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }

    mongoose.connection.on('error', err => {
        console.error('MongoDB connection error:', err);
    });
}

export default connect;