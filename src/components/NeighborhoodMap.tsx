import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NeighborhoodMapProps {
  neighborhood: {
    name: string;
    coordinates?: [number, number];
  };
}

// Coordenadas dos principais bairros da zona sul de São Paulo
const neighborhoodCoordinates: Record<string, [number, number]> = {
  'Itaim Bibi': [-46.6755, -23.5751],
  'Vila Olímpia': [-46.6875, -23.5951],
  'Moema': [-46.6644, -23.6005],
  'Brooklin': [-46.6956, -23.6167],
  'Campo Belo': [-46.6789, -23.6156],
  'Santo Amaro': [-46.7056, -23.6533],
  'Vila Nova Conceição': [-46.6656, -23.5889],
  'Chácara Santo Antônio': [-46.6956, -23.6333],
  'Socorro': [-46.7189, -23.6667],
  'Cidade Ademar': [-46.7289, -23.6789],
  'Pedreira': [-46.7389, -23.6889],
  'Ipiranga': [-46.6102, -23.5926],
  'Vila Mariana': [-46.6378, -23.5778],
  'Saúde': [-46.6189, -23.6156],
  'Cursino': [-46.6289, -23.6256],
  'Sacomã': [-46.6089, -23.6356],
  'Jabaquara': [-46.6456, -23.6456],
  'Vila São José': [-46.6556, -23.6556],
  'Jardim Aeroporto': [-46.6656, -23.6656],
  'Cidade Dutra': [-46.6756, -23.6756]
};

export const NeighborhoodMap = ({ neighborhood }: NeighborhoodMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSet, setTokenSet] = useState(false);

  const coordinates = neighborhoodCoordinates[neighborhood.name] || [-46.6333, -23.5505]; // Default: São Paulo center

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: coordinates,
        zoom: 14,
        pitch: 45,
      });

      // Add marker for the neighborhood
      new mapboxgl.Marker({
        color: '#dc2626', // cms-red color
        scale: 1.2
      })
        .setLngLat(coordinates)
        .setPopup(
          new mapboxgl.Popup()
            .setHTML(`<div class="p-2"><strong>${neighborhood.name}</strong><br>CMS Express atende esta região</div>`)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add service area circle (approximate)
      map.current.on('load', () => {
        if (!map.current) return;
        
        map.current.addSource('service-area', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coordinates
            }
          }
        });

        map.current.addLayer({
          id: 'service-area-circle',
          type: 'circle',
          source: 'service-area',
          paint: {
            'circle-radius': {
              base: 1.75,
              stops: [
                [12, 50],
                [22, 500]
              ]
            },
            'circle-color': '#dc2626',
            'circle-opacity': 0.1,
            'circle-stroke-color': '#dc2626',
            'circle-stroke-width': 2,
            'circle-stroke-opacity': 0.3
          }
        });
      });

    } catch (error) {
      console.error('Erro ao inicializar o mapa:', error);
    }
  };

  useEffect(() => {
    if (tokenSet && mapboxToken) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [tokenSet, mapboxToken]);

  if (!tokenSet) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Mapa da Região - {neighborhood.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Para visualizar o mapa da região, insira seu token público do Mapbox:
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1IjoiY..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={() => setTokenSet(true)}
                disabled={!mapboxToken.trim()}
              >
                Carregar Mapa
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Obtenha seu token gratuito em{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Mapa da Região - {neighborhood.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapContainer} 
          className="w-full h-64 rounded-lg border"
          style={{ minHeight: '300px' }}
        />
        <p className="text-sm text-muted-foreground mt-2">
          Área de atendimento da CMS Express em {neighborhood.name} e região
        </p>
      </CardContent>
    </Card>
  );
};