interface TechnologyTabsProps {
  TABS: string[];
}

export function TechnologyTabs({ TABS }: TechnologyTabsProps) {
  return (
    <div className="flex flex-wrap gap-x-4 ml-1">
      {TABS.map((tab) => (
        <div className="text-sm text-muted-foreground font-semibold " key={tab}>
          {tab}
        </div>
      ))}
    </div>
  );
}
