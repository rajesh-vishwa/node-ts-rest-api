"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default("app:mongoose-service");
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            useFindAndModify: false,
        };
        this.connectWithRetry();
    }
    connectWithRetry() {
        log("Attempting MongoDB connection (will retry if needed)");
        mongoose_1.default
            .connect("mongodb://localhost:27017/api-db", this.mongooseOptions)
            .then(() => {
            log("MongoDB is connected");
        })
            .catch((err) => {
            const retrySeconds = 5;
            log(`MongoDB connection unsuccessful (will retry #${++this
                .count} after ${retrySeconds} seconds):`, err);
            setTimeout(this.connectWithRetry, retrySeconds * 1000);
        });
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vc2VydmljZXMvbW9uZ29vc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQUNoQyxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sZUFBZTtJQVNuQjtRQVJRLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixvQkFBZSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsd0JBQXdCLEVBQUUsSUFBSTtZQUM5QixnQkFBZ0IsRUFBRSxLQUFLO1NBQ3hCLENBQUM7UUFHQSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDNUQsa0JBQVE7YUFDTCxPQUFPLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUNqRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1QsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDYixNQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUNELGdEQUFnRCxFQUFFLElBQUk7aUJBQ25ELEtBQUssVUFBVSxZQUFZLFlBQVksRUFDMUMsR0FBRyxDQUNKLENBQUM7WUFFRixVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxrQkFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==