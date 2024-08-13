import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopGainers } from '../services/coinGeckoApi';
import CoinCard from '../components/CoinCard';
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: topGainers, isLoading, isError } = useQuery({
    queryKey: ['topGainers'],
    queryFn: fetchTopGainers,
    refetchInterval: 60000, // Refetch every minute
  });

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Top Gaining Cryptocurrencies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-[200px] w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p className="text-red-500">Failed to fetch cryptocurrency data. Please try again later.</p>
      </div>
    );
  }

  const sortedGainers = topGainers.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Top Gaining Cryptocurrencies (>5%)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedGainers.map(coin => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Index;