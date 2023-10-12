import { RemovalPolicy } from "aws-cdk-lib";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

interface DynamoDBConstructProps {
    tableName: string;
    partitionKeyType: AttributeType,
    billingMode: BillingMode
}

export class DynamoDBConstruct extends Construct {

    constructor(scope: Construct, props: DynamoDBConstructProps) {
        super(scope, props.tableName)

        new Table(this, props.tableName, {
            tableName: props.tableName,
            partitionKey: { name: 'pk', type: props.partitionKeyType },
            sortKey: { name: 'createdAt', type: AttributeType.NUMBER },
            billingMode: props.billingMode,
            removalPolicy: RemovalPolicy.RETAIN,
        });
    }

}