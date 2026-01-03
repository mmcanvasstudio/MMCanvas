interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: '1',
    value: '500+',
    label: 'Products Shot',
    description: 'Professional photography delivered',
  },
  {
    id: '2',
    value: '50+',
    label: 'Happy Clients',
    description: 'Brands trust our expertise',
  },
  {
    id: '3',
    value: '5 Years',
    label: 'Experience',
    description: 'In product photography',
  },
  {
    id: '4',
    value: '100%',
    label: 'Satisfaction',
    description: 'Client satisfaction rate',
  },
];

/**
 * Stats section showcasing key metrics and achievements
 */
export default function StatsSection(): JSX.Element {
  return (
    <section className="py-24 bg-background border-y border-gray-medium">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="mb-3">
                <span className="text-4xl md:text-5xl font-bold text-accent block">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-text-secondary">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
