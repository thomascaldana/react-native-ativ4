import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Product, Review } from '../../data/mockProducts';
import { apiService } from '../../services/api';

const { width } = Dimensions.get('window');

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const productData = await apiService.getProductById(Number(id));
      setProduct(productData);
    } catch (err) {
      setError('Erro ao carregar produto. Tente novamente.');
      console.error('Erro ao carregar produto:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text style={styles.loadingText}>Carregando produto...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error || !product) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error || 'Produto não encontrado'}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadProduct}>
            <Text style={styles.retryButtonText}>Tentar Novamente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  const renderImage = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.carouselImage} />
  );

  const renderReview = ({ item }: { item: Review }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewerName}>{item.reviewerName}</Text>
        <Text style={styles.reviewStars}>{renderStars(item.rating)}</Text>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
      <Text style={styles.reviewDate}>
        {new Date(item.date).toLocaleDateString('pt-BR')}
      </Text>
    </View>
  );

  const originalPrice = product.price / (1 - product.discountPercentage / 100);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right', 'bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>
        </View>

        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.imageCarousel}
        />

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.title}>{product.title}</Text>
          
          <View style={styles.ratingContainer}>
            <Text style={styles.stars}>{renderStars(product.rating)}</Text>
            <Text style={styles.rating}>({product.rating})</Text>
            <Text style={styles.reviewCount}>• {product.reviews.length} avaliações</Text>
          </View>

          <View style={styles.priceContainer}>
            {product.discountPercentage > 0 && (
              <Text style={styles.originalPrice}>
                R$ {originalPrice.toFixed(2)}
              </Text>
            )}
            <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
            {product.discountPercentage > 0 && (
              <Text style={styles.discount}>-{product.discountPercentage}%</Text>
            )}
          </View>

          <Text style={styles.stock}>
            {product.stock > 0 ? `${product.stock} em estoque` : 'Fora de estoque'}
          </Text>

          <Text style={styles.description}>{product.description}</Text>

          {/* Product Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.sectionTitle}>Detalhes do Produto</Text>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Categoria:</Text>
              <Text style={styles.detailValue}>{product.category}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>SKU:</Text>
              <Text style={styles.detailValue}>{product.sku}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Peso:</Text>
              <Text style={styles.detailValue}>{product.weight}g</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Dimensões:</Text>
              <Text style={styles.detailValue}>
                {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
              </Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Garantia:</Text>
              <Text style={styles.detailValue}>{product.warrantyInformation}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Envio:</Text>
              <Text style={styles.detailValue}>{product.shippingInformation}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Política de Devolução:</Text>
              <Text style={styles.detailValue}>{product.returnPolicy}</Text>
            </View>
          </View>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            <Text style={styles.sectionTitle}>Tags</Text>
            <View style={styles.tagsList}>
              {product.tags.map((tag: string, index: number) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Reviews */}
          <View style={styles.reviewsContainer}>
            <Text style={styles.sectionTitle}>Avaliações</Text>
            {product.reviews.map((review: Review, index: number) => (
              <View key={index}>
                {renderReview({ item: review })}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
  },
  imageCarousel: {
    height: 300,
  },
  carouselImage: {
    width: width,
    height: 300,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 20,
  },
  brand: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 12,
    lineHeight: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stars: {
    fontSize: 18,
    marginRight: 8,
  },
  rating: {
    fontSize: 16,
    color: '#6c757d',
    fontWeight: '500',
    marginRight: 8,
  },
  reviewCount: {
    fontSize: 14,
    color: '#6c757d',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  originalPrice: {
    fontSize: 16,
    color: '#6c757d',
    textDecorationLine: 'line-through',
    marginRight: 12,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28a745',
    marginRight: 12,
  },
  discount: {
    fontSize: 14,
    color: '#dc3545',
    backgroundColor: '#f8d7da',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontWeight: '600',
  },
  stock: {
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
    marginBottom: 24,
  },
  detailsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  detailLabel: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#212529',
    flex: 2,
    textAlign: 'right',
  },
  tagsContainer: {
    marginBottom: 24,
  },
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
  },
  reviewsContainer: {
    marginBottom: 24,
  },
  reviewCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212529',
  },
  reviewStars: {
    fontSize: 14,
  },
  reviewComment: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 20,
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 12,
    color: '#6c757d',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#6c757d',
    marginTop: 12,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#dc3545',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  retryButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
});
