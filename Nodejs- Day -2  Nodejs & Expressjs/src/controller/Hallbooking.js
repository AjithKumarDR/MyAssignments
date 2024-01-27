//#region Room data source
const Room=[{
    RoomNo:1,
    RoomName:"A1",
    AvailableSeats:5, 
    Amenities:["TV","AC","Water Heater"],
    PricePerHrs:"450"
   
},
{
    RoomNo:2,
    RoomName:"A2",
    AvailableSeats:3, 
    Amenities:["TV","Water Heater"],
    PricePerHrs:"350"
   
},
{
    RoomNo:3,
    RoomName:"A3",
    AvailableSeats:6, 
    Amenities:["TV","AC","Water Heater","Fridge"],
    PricePerHrs:"650"
   
}]
//#endregion

//#region  Booking Orders Source
const BookingOrders=[{
    OrderNo:1,
    CustomerName:"Ajithkumar",
    Date:"26.01.2024",
    StartTime:"27.01.2024 09.00",
    EndTime:"27.01.2024 19.00",
    BookedRoomNo:[1]


},
{
    OrderNo:2,
    CustomerName:"AShokkumar",
    Date:"27.01.2024",
    StartTime:"28.01.2024 09.00",
    EndTime:"28.01.2024 19.00",
    BookedRoomNo:[1,2]


}
// ,{
//     OrderNo:3,
//     CustomerName:"Amar",
//     Date:"27.01.2024",
//     StartTime:"28.01.2024 09.00",
//     EndTime:"28.01.2024 19.00",
//     BookedRoomNo:[3]


// }

]
//#endregion

//#region 1.Create Room
const AddRooms=(req,res)=>{
    try{
        let RoomNo = Room.length?Room[Room.length-1].RoomNo + 1:1
        let data = req.body
        data.RoomNo = RoomNo

        const roomname = Room.find(value => value.RoomName === data.RoomName);
        if(roomname){
            res.status(400).send({
                message:"RoomName Already Exists ",
                roomname
            })

        }
        else{
            Room.push(data)

            res.status(201).send({
                message:"Room Created Successfully",
                data
            })
        }
        
        
    }
    catch (err){
        res.status(500).send({
            message:"Internal server error"
        })

    }
}
//#endregion

//#region 2.Book a Room(Booking Orders)
const AddBookingOrders=(req,res)=>{
    try{
        let id = BookingOrders.length?BookingOrders[BookingOrders.length-1].OrderNo + 1:1
        let data = req.body
        data.OrderNo = id
       
        let InvalidRoom=[]
        data.BookedRoomNo.forEach(rom=> {
            
            let valu=Room.find(value => value.RoomNo === rom)
            console.log(valu,rom)
            if(valu ===undefined){
                InvalidRoom.push(rom)
            }
        })
          
          if(InvalidRoom.length===0){
            BookingOrders.push(data)

            res.status(201).send({
                message:"Orders Booking  Successfully",
                data
            })

          }
          else{
            res.status(400).send({
                message:"Invalide Room Numbers",
                InvalidRoom
            })
          }
          
       
       
        
    }
    catch (err){
        res.status(500).send({
            message:"Internal server error"
        })

    }
}
//#endregion

//#region Just Cheking Perpose getting all datas from Rooms ,Booking Orders
const getalldatas=(req,res)=>{
    try{
        res.status(200).send({
            message:"user data fecthed successfully",
            Room, BookingOrders
        })
    }
    catch (err){
        res.status(500).send({
            message:"Internal server error"
        })

    }
}
//#endregion

//#region 3.List all Rooms with Booked Data
const RoomDetails=(req,res)=>{
    try{
        
        const bookedRooms = [];
        Room.forEach(room => {
            const roomBooked = BookingOrders.some(order => order.BookedRoomNo.includes(room.RoomNo));
            if (roomBooked) {
                const bookingOrders = BookingOrders.filter(order => order.BookedRoomNo.includes(room.RoomNo));
                bookingOrders.forEach(bookingOrder => {
                    bookedRooms.push({
                        RoomName: room.RoomName,
                        BookedStatus: "Booked",
                        CustomerName: bookingOrder.CustomerName,
                        Date: bookingOrder.Date,
                        StartTime: bookingOrder.StartTime,
                        EndTime: bookingOrder.EndTime
                    });
                });
            }
            else{
                bookedRooms.push({
                    RoomName: room.RoomName,
                    BookedStatus: "Not Booked",
                    CustomerName:"",
                    Date: "",
                    StartTime: "",
                    EndTime: ""
                });

            }
        });







        res.status(200).send({
            message:"user data fecthed successfully",
            bookedRooms
            
        })
    }
    catch (err){
        res.status(500).send({
            message:"Internal server error"
        })

    }
}
//#endregion

//#region 4.List all customers with bokked data with
const CustomerDetails=(req,res)=>{
    try{
        const bookedCustomers = [];
        BookingOrders.forEach(order => {
            const customerName = order.CustomerName;
            order.BookedRoomNo.forEach(roomNo => {
                const room = Room.find(data => data.RoomNo === roomNo);
                if (room) {
                    bookedCustomers.push({
                        CustomerName: customerName,
                        RoomName: room.RoomName,
                        Date: order.Date,
                        StartTime: order.StartTime,
                        EndTime: order.EndTime
                    });
                }
            });
        });







        res.status(200).send({
            message:"user data fecthed successfully",
            bookedCustomers
            
        })
    }
    catch (err){
        res.status(500).send({
            message:"Internal server error"
        })

    }
}
//#endregion

//#region 5.List how many times a customer has booked the room with below details
const CustomerBookingDetails=(req,res)=>{
    try{
        const bookedCustomers = [];
        BookingOrders.forEach(order => {
            const customerName = order.CustomerName;
            order.BookedRoomNo.forEach(roomNo => {
                const room = Room.find(data => data.RoomNo === roomNo);
                const Dat = order.StartTime.split(' ')[0];
                console.log(Dat)
                if (room) {
                    bookedCustomers.push({
                        CustomerName: customerName,
                        RoomName: room.RoomName,
                        Date: order.Date,
                        StartTime: order.StartTime,
                        EndTime: order.EndTime,
                        BookingID:BookingOrders.OrderNo,
                        BookkingDate:Dat,
                        BookedStatus: "Booked",
                    });
                }
            });
        });







        res.status(200).send({
            message:"user data fecthed successfully",
            bookedCustomers
            
        })
    }
    catch (err){
        res.status(500).send({
            message:"Internal server error"
            
        })
          console.log(err)
    }
}
//#endregion




export default{
    AddRooms,
    AddBookingOrders,
    getalldatas,
    RoomDetails,
    CustomerDetails,
    CustomerBookingDetails,
   
}