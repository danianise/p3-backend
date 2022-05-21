const mongoose = require('../db/connection')

const portfolioSchema = new mongoose.Schema (
    {

        Username: {type: String},
        CashBalance: { type: Number },
        PortfolioBalance: { type: Number },
        StockHoldings: [
            {
                Symbol: {type: String},
                Holding: {type: Number},
            }
        ]
    }

)


const Portfolio = mongoose.model("portfolio", portfolioSchema);
module.exports = Portfolio