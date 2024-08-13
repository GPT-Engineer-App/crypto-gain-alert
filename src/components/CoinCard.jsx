import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const CoinCard = ({ coin }) => {
  const previousPrice = coin.current_price / (1 + coin.price_change_percentage_24h / 100);
  const priceIncreased = coin.price_change_percentage_24h > 0;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <img src={coin.image} alt={coin.name} className="h-6 w-6 mr-2" />
          {coin.name} ({coin.symbol.toUpperCase()})
        </CardTitle>
        <Badge variant={priceIncreased ? "success" : "destructive"}>
          {priceIncreased ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm font-medium text-muted-foreground">Previous:</span>
            <span className="text-sm font-medium line-through text-muted-foreground">
              ${previousPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">Current:</span>
            <div className="text-2xl font-bold flex items-center">
              ${coin.current_price.toFixed(2)}
              {priceIncreased ? (
                <ArrowUpIcon className="h-4 w-4 text-green-500 ml-1" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500 ml-1" />
              )}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
};

export default CoinCard;