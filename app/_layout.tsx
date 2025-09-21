import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Produtos",
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="product/[id]" 
        options={{ 
          title: "Detalhes do Produto",
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
