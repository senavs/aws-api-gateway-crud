import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DynamoDBConstruct } from '../construct/dynamo';
import { AttributeType, BillingMode } from 'aws-cdk-lib/aws-dynamodb';


export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new DynamoDBConstruct(this, {
      tableName: 'USER_TABLE',
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKeyType: AttributeType.STRING,
    })
  }
}
