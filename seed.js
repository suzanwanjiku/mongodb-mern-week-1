const { connectDB, mongoose } = require('./db');
const { User } = require('./Models/User');
const { Task } = require('./Models/Task');


async function main(){
    await connectDB();

    await User.deleteMany({});
    await Task.deleteMany({});

    await User.insertMany([
        { name: "Eunice Wanjiru", email: "eunice@example.com", role: "admin" },
        { name: "Susan Wanjiku", email: "susan@example.com" }
    ]);

    await Task.insertMany([
        { title: "Write Proposal", status: "todo", owner: "eunice" },
        { title: "Design Schema", status: "in_progress", owner: "susan" }
    ]);

    console.log("Data populated");
    await mongoose.disconnect();
}

main();