import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useEndorsements() {
  return useQuery(orpc.endorsements.list.queryOptions({ staleTime: 30_000 }));
}

export function useEndorsementStats() {
  return useQuery(orpc.endorsements.stats.queryOptions({ staleTime: 15_000 }));
}

export function useAddEndorsement() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.endorsements.create.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: orpc.endorsements.key() });
      },
    }),
  );
}
