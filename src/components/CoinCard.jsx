import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CoinCard = ({ coin }) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {coin.name} ({coin.symbol.toUpperCase()})
        </CardTitle>
        <img src={coin.image} alt={coin.name} className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${coin.current_price.toFixed(2)}</div>
        <Badge className="mt-2" variant="secondary">
          +{coin.price_change_percentage_24h.toFixed(2)}%
        </Badge>
        <p className="text-xs text-muted-foreground mt-2">
          Market Cap: ${coin.market_cap.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  );
};

export default CoinCard;