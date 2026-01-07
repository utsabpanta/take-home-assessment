import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

/**
 * DynamoDB implementation of database operations
 * Uses LocalStack for local development
 *
 * NOTE: This is a reference implementation. You can:
 * - Use this as-is and implement the TODO methods
 * - Modify the structure to fit your design
 * - Delete this and create your own database layer
 * - Use PostgreSQL instead (see postgres-service.ts)
 *
 * Documentation: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/
 */
export class DynamoDBService {
  private client: DynamoDBDocumentClient;
  private tableName: string;

  constructor() {
    const endpoint = process.env.DYNAMODB_ENDPOINT || 'http://localhost:4566';
    const region = process.env.AWS_REGION || 'us-east-1';
    this.tableName = process.env.DYNAMODB_TABLE_NAME || 'feedback';

    const ddbClient = new DynamoDBClient({
      endpoint,
      region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'test',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'test'
      }
    });

    this.client = DynamoDBDocumentClient.from(ddbClient);
  }
}
