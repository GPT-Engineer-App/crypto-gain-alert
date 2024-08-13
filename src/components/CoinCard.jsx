import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const CoinCard = ({ coin }) => {
  const previousPrice = coin.current_price / (1 + coin.price_change_percentage_24h / 100);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {coin.name} ({coin.symbol.toUpperCase()})
        </CardTitle>
        <img src={coin.image} alt={coin.name} className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="text-sm text-muted-foreground line-through">
            ${previousPrice.toFixed(2)}
          </div>
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
          <div className="text-2xl font-bold">${coin.current_price.toFixed(2)}</div>
        </div>
        <Badge className="mt-2" variant={coin.price_change_percentage_24h > 0 ? "success" : "destructive"}>
          {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
        </Badge>
        <p className="text-xs text-muted-foreground mt-2">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
};

export default CoinCard;