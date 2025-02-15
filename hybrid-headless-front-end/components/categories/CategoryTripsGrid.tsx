"use client";

import { SimpleGrid } from "@mantine/core";
import React from "react";
import type { Trip } from "../../types/api";
import TripCard from "../trips/TripCard";

interface CategoryTripsGridProps {
	trips: Trip[];
}

export function CategoryTripsGrid({ trips }: CategoryTripsGridProps) {
	return (
		<SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
			{trips.map((trip) => (
				<TripCard key={trip.id} trip={trip} />
			))}
		</SimpleGrid>
	);
}
